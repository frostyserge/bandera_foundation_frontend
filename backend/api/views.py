from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import MerchSerializer
from .models import Merch

# our api views

class HomeView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Welcome to our Foundation Page!'}
        return Response(content)

class MerchView(CreateAPIView):
    queryset = Merch.objects.all()
    serializer_class = MerchSerializer