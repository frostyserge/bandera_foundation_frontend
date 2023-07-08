from django.db import models

# Create your models here.

class Shop(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    description = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['name']