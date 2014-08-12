from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'djangular_theater.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'tomatoes.views.home', name='home'),


    url(r'^search/$', 'tomatoes.views.search', name='search'),
    url(r'^upcoming/$', 'tomatoes.views.upcoming', name='upcoming'),
    url(r'^new_movie/$', 'tomatoes.views.new_movie', name='new_movie'),
    url(r'^all_movies/$', 'tomatoes.views.all_movies', name='all_movies'),
    url(r'^new_movie_json/$', 'tomatoes.views.new_movie_json', name='new_movie_json'),
    url(r'^movie_template/$', 'tomatoes.views.movie_template', name='movie_template'),
    url(r'^tinder/$', 'tomatoes.views.tinder', name='tinder'),
    url(r'^new_favorite/$', 'tomatoes.views.new_favorite', name='new_favorite'),
    url(r'^all_favorites/$', 'tomatoes.views.all_favorites', name='all_favorites'),
    # Angular
    url(r'^angular_theater/$', 'tomatoes.views.angular_theater', name='angular_theater'),
)
