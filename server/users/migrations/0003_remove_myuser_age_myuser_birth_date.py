# Generated by Django 4.1.2 on 2022-10-27 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_myuser_managers_myuser_date_joined_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='myuser',
            name='age',
        ),
        migrations.AddField(
            model_name='myuser',
            name='birth_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
