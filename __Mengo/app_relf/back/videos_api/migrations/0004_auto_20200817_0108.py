# Generated by Django 3.1 on 2020-08-17 01:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos_api', '0003_auto_20200811_0914'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addressitem',
            name='address',
            field=models.CharField(max_length=255),
        ),
    ]