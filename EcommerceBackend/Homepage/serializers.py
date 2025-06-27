from rest_framework import serializers
from .models import CarouselAd
from utils.supabase_client import supabase
from storage3.utils import StorageException

class CarouselAdSerializer(serializers.ModelSerializer):
    image_file = serializers.ImageField(write_only=True)

    class Meta:
        model = CarouselAd
        fields = ['id', 'title', 'description', 'image_file', 'image_url', 'created_at']
        read_only_fields = ['id', 'image_url', 'created_at']

    def create(self, validated_data):
        image = validated_data.pop('image_file')
        filename = image.name
        storage_path = f'carousel/{filename}'

        # Read file content as bytes
        file_bytes = image.read()

        try:
            # Upload to Supabase Storage (bucket: 'carouselimages')
            upload_response = supabase.storage.from_('carouselimages').upload(
                storage_path,
                file_bytes,
                {"content-type": image.content_type}
            )
        except StorageException as e:
            raise serializers.ValidationError(f"Image upload failed: {str(e)}")

        # Get public URL for the uploaded image
        public_url = supabase.storage.from_('carouselimages').get_public_url(storage_path)

        # Save instance to database with image_url
        return CarouselAd.objects.create(
            image_url=public_url,
            **validated_data
        )
