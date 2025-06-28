from django.urls import path
from .views import CartItemList, CartItemDetail

urlpatterns = [
    path("list/", CartItemList.as_view(), name="Cart_list_view"),
    path("detail/<int:pk>", CartItemDetail.as_view(), name="cart_detail"),
]
