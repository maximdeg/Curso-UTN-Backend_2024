import React, { useState } from 'react';
import { useForm } from '../../Hooks/useForm';
import { POST } from '../../fetching/http.fetching';
import { extractFormData } from '../../utils/extractFormData.js';

const CreateProductScreen = () => {
    const form_fields = {
        name: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        image_base_64: '',
    };
    const { formValuesState, setFormValuesState, handleChangeInputValue } = useForm(form_fields);
    const [image_base_64, setImage_base_64] = useState('');

    const handleSubmitNewProductForm = async (e) => {
        try {
            e.preventDefault();
            const form_HTML = e.target;
            const form_values = new FormData(form_HTML);

            const form_fields = {
                name: '',
                description: '',
                price: '',
                stock: '',
                category: '',
            };

            const form_values_object = extractFormData(form_fields, form_values);

            form_values_object.image_base_64 = image_base_64;
            const response = await POST('http://127.0.0.1:3000/api/products', form_values_object);

            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleChangeFile = (e) => {
        const file_found = e.target.files[0];
        console.log('file_found', file_found);
        // const FILE_MB_LIMIT = 5;

        if (file_found && file_found.size > 5 * 1024 * 1024) {
            alert('El tamaño de la imagen debe ser menor a 5MB');
            return; //cancel operation
        }

        const file_reader = new FileReader();
        console.log('file_reader', file_reader);

        file_reader.onloadend = () => {
            console.log('Carga finalizada', file_reader.result);
            setImage_base_64(file_reader.result);
        };

        if (file_found) {
            file_reader.readAsDataURL(file_found);
        }
    };

    return (
        <div>
            <h1>CREATE NEW PRODUCT</h1>
            <form onSubmit={handleSubmitNewProductForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="name" name="name" id="name" placeholder="Enter your name" onChange={handleChangeInputValue} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="description" name="description" id="description" placeholder="Enter your email" onChange={handleChangeInputValue} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="price" name="price" id="price" placeholder="Enter your password" onChange={handleChangeInputValue} />
                </div>
                <div>
                    <label htmlFor="stock">stock</label>
                    <input type="stock" name="stock" id="stock" placeholder="Enter your password" onChange={handleChangeInputValue} />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input type="category" name="category" id="category" placeholder="Enter your password" onChange={handleChangeInputValue} />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="file" name="image_base_64" id="image" placeholder="Enter your password" onChange={handleChangeFile} />
                </div>
                <div style={{ height: '200px', width: '200px' }}>
                    {image_base_64 && <img src={image_base_64} style={{ height: '100%', width: '100%' }} />}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default CreateProductScreen;
