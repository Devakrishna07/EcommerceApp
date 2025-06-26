from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework import generics
from .models import CarouselAd
from .serializers import CarouselAdSerializer

class CarouselAdUploadView(generics.CreateAPIView):
    queryset = CarouselAd.objects.all()
    serializer_class = CarouselAdSerializer

class CarouselAdListView(generics.ListAPIView):
    queryset = CarouselAd.objects.all().order_by('-created_at')
    serializer_class = CarouselAdSerializer
