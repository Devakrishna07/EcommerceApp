from django.db import models
from django.contrib.auth import get_user_model
from Products.models import Product

User = get_user_model

class CartItem(models.Model):
    user = models.ForeignKey(
        'auth.User',
        on_delete=models.CASCADE,
        related_name='cart_items'
    )

    Product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='cart_items'
    )

    quantity = models.PositiveBigIntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.Product.name} ({self.quantity})"

# Create your models here.
