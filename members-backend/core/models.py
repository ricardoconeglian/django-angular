from django.db import models

# Create your models here.

class Member(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField()
    address = models.CharField(max_length=200)
    photo = models.ImageField( blank=True, null=True) #upload_to='media'

    def __str__(self):
        return self.name + ' ' + self.surname