import React, {useState} from 'react'
import {Typography, Button, Form, Input} from 'antd';
import FileUpload from '../../utils/FileUpload';

//const {Title2} = Typography;
const {TextArea} = Input;
const Continents = [
    {key:1, value:"A"},
    {key:2, value:"B"},
    {key:3, value:"C"},
    {key:4, value:"D"},
    {key:5, value:"E"},
    {key:6, value:"F"},
    {key:7, value:"G"}

]

function UploadProductPage() {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }
    const descriptionChangeHandler = (event) =>{
        setDescription(event.currentTarget.value)
    }
    const priceChangeHandler = (event) =>{
        setPrice(event.currentTarget.value)
    }
    const continentChangeHandler = (event) =>{
        setContinent(event.currentTarget.value)
    }
    return (
        <div style = {{ maxWidth : '700px', margin: '2rem auto' }}>
            <div style = {{ textAlign : 'center', marginBottom:'2rem' }}>
                <h2 level = {2}> 여행 상품 업로드 </h2>
            </div>

            <Form>
                {/*DropZone*/}
                <FileUpload></FileUpload>

                
                <br/>
                <br/>
                <label>이름</label>
                <Input onChange={titleChangeHandler} value = {Title} />

                <br/>
                <br/>
                <label>설명</label>
                <TextArea onChange = {descriptionChangeHandler} value = {Description} />

                <br/>
                <br/>
                <label>가격($)</label>
                <Input type = 'number' onChange={priceChangeHandler} value = {Price} />

                <br/>
                <br/>
                <select onChange={continentChangeHandler} value = {Continent}>
                    {Continents.map(item => (
                        <option key = {item.key} value= {item.key}>{item.value}</option>
                    ))}
                    
                </select>

                <br/>
                <br/>
                <Button>
                    확인
                </Button>

            </Form>
        </div>
    )
}

export default UploadProductPage
