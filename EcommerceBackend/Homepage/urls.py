from django.urls import path
from .views import CarouselAdUploadView, CarouselAdListView

urlpatterns = [
    path('carousel/upload/', CarouselAdUploadView.as_view(), name='upload-carousel'),
    path('carousel/', CarouselAdListView.as_view(), name='get-carousel'),
]
