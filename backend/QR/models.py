from django.db import models

from common.models import IndexedTimeStampedModel


class QRCode(IndexedTimeStampedModel, models.Model):
    batch_number = models.CharField(max_length=100)
    product_name = models.CharField(max_length=1000)
    qr_code = models.BinaryField()
    qr_code_svg = models.BinaryField()
    qr_code_pdf = models.BinaryField()
    qr_code_jpg = models.BinaryField()
