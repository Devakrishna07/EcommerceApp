# serializers.py
from rest_framework import serializers
from .models import CarouselAd
from utils.supabase_client import supabase  # ✅ Import supabase here

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

        # ✅ Upload to Supabase Storage (carouselimage bucket)
        upload_response = supabase.storage.from_('carouselimage').upload(
            storage_path,
            image,
            {"content-type": image.content_type}
        )

        # ✅ Check if upload was successful
        if upload_response.get("error"):
            raise serializers.ValidationError("Image upload failed to Supabase")

        # ✅ Get public URL
        public_url = supabase.storage.from_('carouselimage').get_public_url(storage_path)

        # ✅ Create and return CarouselAd with image URL
        return CarouselAd.objects.create(
            image_url=public_url,
            **validated_data
        )
