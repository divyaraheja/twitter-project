from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from . import views

router=routers.DefaultRouter()
urlpatterns = [
    path('registerUser',views.registerUser)
]
