from django.db import models

# Create your models here.

class Merch(models.Model):
    name = models.CharField(max_length=100)
    img = models.CharField(max_length=500)
    price = models.IntegerField(default=0)
    description = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['name']

class AmazonItem(models.Model):
    name = models.CharField(max_length=150)
    img = models.CharField(max_length=500)
    description = models.CharField(max_length=1000)
    high_priority = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

