from fastapi import FastAPI, File ,UploadFile
import uvicorn
import tensorflow as tf
import numpy as np
from io import BytesIO
from PIL import Image
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    'https://localhost',
    'https://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)




MODEL = tf.keras.models.load_model('C:/Users/gunja/Documents/Untitled Folder/myy_model.h5')
class_name = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
                    'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 
                    'Cherry_(including_sour)___healthy', 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 
                    'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 
                    'Grape___Black_rot', 'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 
                    'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot',
                    'Peach___healthy', 'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 
                    'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 
                    'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew', 
                    'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot', 
                    'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold', 
                    'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 
                    'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus',
                      'Tomato___healthy']

@app.get('/ping')
async def ping():
    return "i am alive"

from PIL import Image

def read_image_as_file(data, target_size=(128, 128)):
    image = Image.open(BytesIO(data))
    image = image.resize(target_size)
    image = np.array(image)
    return image


@app.post('/predict')
async def predict(
    file: UploadFile = File(...) 
):
    image = read_image_as_file(await file.read())
    image_batch = np.expand_dims(image ,0)

    prediction = MODEL.predict(image_batch)
    index = np.argmax(prediction[0])
    predicted_class = class_name[index]
    confidence = np.max(prediction[0])
    print(predicted_class,confidence*100)
    return {
        'class' : predicted_class,
        'confidence': float(confidence)
    }




if __name__ == '__main__':
    uvicorn.run(app ,host='localhost',port=8000)