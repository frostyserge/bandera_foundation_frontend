from django.contrib import admin
from .views import MerchView
from django.urls import path

urlpatterns = [
    path('', MerchView.as_view()),
]