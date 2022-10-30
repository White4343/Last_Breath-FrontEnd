import datetime
import math

from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from users.models import *


class MyUserPostSerializer(ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = MyUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            username=validated_data['username'],
            birth_date=validated_data['birth_date'],
        )
        return user

    class Meta:
        model = MyUser
        fields = ('email',
                  'first_name',
                  'last_name',
                  'password',
                  'username',
                  'birth_date',
                  )


class MyUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ("username",
                  "first_name",
                  "last_name",
                  "birth_date",
                  "role",
                  "email"
#                   "password"
                  )


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"

