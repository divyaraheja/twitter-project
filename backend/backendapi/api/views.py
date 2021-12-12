import json

from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['POST'])
def registerUser(request):
    if request.method == 'POST':
        User.objects.create_user(username=request.data.get('username'), email=request.data.get('emailId'),
                                password=request.data.get('password'))
        return Response({'result':True, 'message':'User created'})

@api_view(['POST'])
def authenticateUser(request):
    if request.method == 'POST':
        user = authenticate(username=request.data.get('emailId'), password=request.data.get('password'))
        if user is not None:
            return Response({'result':True, 'message':'User authenticated'})
        else:
            return Response({'result':False, 'message':'User not authenticated'})
            # No backend authenticated the credentials
