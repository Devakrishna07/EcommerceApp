
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("product/", include('Products.urls')),
    path("Homepage/", include('Homepage.urls')),
    path("user/", include('users.urls')),
]
