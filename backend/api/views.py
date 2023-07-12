from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .serializers import MerchSerializer
from .models import Merch

# our api views

class MerchView(CreateAPIView):
    queryset = Merch.objects.all()
    serializer_class = MerchSerializer