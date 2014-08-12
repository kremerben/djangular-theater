from django.db import models

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=120)
    poster = models.URLField(null=True, blank=True)
    synopsis = models.TextField(null=True, blank=True)
    tomato_id = models.IntegerField()




class Favorite(models.Model):
    title = models.CharField(max_length=120)
    poster = models.URLField(null=True, blank=True)
    identifier = models.IntegerField()

