// 'use client tidak menerima MetaData jdi harus dibuat terpisah

'use client'
import { tagRevalidate } from '@/app/action';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';



// ini membuat SCHEMA untuk VALIDASI nya
const createSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email("invalid format").required("email is required"),
    age: yup.number().required("age is required").min(1, "minimal age is 1")
})


interface FormValue {
    name: string;
    email: string;
    age: number;
}

export default function CreateForm() {

    const initialValues: FormValue = { name: "", email: "", age: 0 }

    // handleCreate ini datanya berubah2 "async" 
    const handleCreate = async (data: FormValue) => {
        try {        
            const res = await fetch("http://localhost:2000/user", {
                method: "POST", // POST karena mau nambahi data

                // ngirim body ini yang tipe datanya JSON yang diubah ke STRING
                body: JSON.stringify(data)
            })

            // ini jika ERROR
            if (!res.ok) throw "Create user failed"

            //! INI YANG MEMBUAT DATA CACHING USER ON DEMAND
            // "users" ini didalam tag: ["users"]
            tagRevalidate("users")

            alert("User Created")
        
        } catch (err) {
            console.log(err);            
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={createSchema}

            // ini ketika diklik SUBMIT maka akan memanggil handleCreate, values ini data yg diinput user
            onSubmit={(values) => {                
                handleCreate(values)
            }}
        >
            {
                () => {
                    return (
                        <Form>
                            {/* Ini untuk membuat kolom NAMA */}
                            <div className='mt-[10px]'>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" className="border border-1"/>
                                <ErrorMessage
                                    name='name'
                                    component="div"
                                    className='text-[12px] text-red-500'
                                />
                            </div>

                            {/* EMAIL */}
                            <div className='mt-[10px]'>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" className="border border-1"/>
                                <ErrorMessage
                                    name='email'
                                    component="div"
                                    className='text-[12px] text-red-500'
                                />
                            </div>

                            {/* AGE */}
                            <div className='mt-[10px]'>
                                <label htmlFor="age">Age</label>
                                <Field type="number" name="age" className="border border-1"/>
                                <ErrorMessage
                                    name='age'
                                    component="div"
                                    className='text-[12px] text-red-500'
                                />
                            </div>

                            {/* BUTTON SUBMIT */}
                            <button type='submit' className='bg-teal-500 p-2 mt-2'>Create</button>

                        </Form>
                    )
                }
            }
        </Formik>
    )
}