// 'use client tidak menerima MetaData jadi harus dibuat terpisah
'use client';

import { tagRevalidate } from '@/app/action';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

// ini membuat SCHEMA untuk VALIDASI nya
const createSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    price: yup
        .number()
        .required('Price is required')
        .min(1, 'Minimal price is 1'),
});

interface FormValue {
    name: string;
    price: number;
}

export default function CreateForms() {
    const initialValues: FormValue = { name: '', price: 0 };

    // Handle create function ini datanya interaktif "async", sehingga pakai React Hook
    const handleCreate = async (data: FormValue) => {
        try {

            //! PERHATIKAN INI URL BACKEND (.env.local) untuk dikirim ke server samakan URL API
            const res = await fetch('http://localhost:1000/events', {
                method: 'POST', // POST karena mau nambahi data
                headers: {
                    'Content-Type': 'application/json',
                }, // Ensure content-type is specified
                body: JSON.stringify(data), // ngirim body ini yang tipe datanya JSON yang diubah ke STRING
            });

            // Handle errors
            if (!res.ok) throw new Error('Create event failed');

            //! INI YANG MEMBUAT DATA CACHING USER ON DEMAND
            // Revalidate tag caching "users" ini didalam tag: ["users"]
            tagRevalidate('users');

            alert('Event Created');
        } catch (err) {
            console.error(err); // Improved error logging
        }
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={createSchema}

                // ini ketika diklik SUBMIT maka akan memanggil handleCreate, values ini data yg diinput user
                onSubmit={(values) => {
                    handleCreate(values);
                }}
            >
                {() => (
                    <div>
                        <Form>
                            {/* Name field */}
                            <div className="mt-[10px]">
                                <label htmlFor="name">Name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    className="border border-1"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-[12px] text-red-500"
                                />
                            </div>

                            {/* Price field */}
                            <div className="mt-[10px]">
                                <label htmlFor="price">Price</label>
                                <Field
                                    type="number"
                                    name="price"
                                    className="border border-1"
                                />
                                <ErrorMessage
                                    name="price"
                                    component="div"
                                    className="text-[12px] text-red-500"
                                />
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                className="bg-teal-500 p-2 mt-2"
                            >
                                Create
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    );
}
