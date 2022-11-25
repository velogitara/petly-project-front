import {
    Formik, Form,
    // ErrorMessage
} from 'formik';
import Input from 'components/Input';
import Button from 'components/Button';
import { Label } from './FormAddNews.styled';


const FormAddNews = ({ onClose }) => {

    return <Formik
        initialValues={{
            title: '',
            text: '',
            link: '',
        }}

        
        
        onSubmit={async values => {

        onClose();

        }}
        

        >
        <Form>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" placeholder="Type news title" styled="inputAuth" style={{ margin: "0 0 60px 0" }}/>

            <Label htmlFor="text">Description</Label>
            <Input id="text" name="text" as="textarea" styled="inputAuth" placeholder="Type short news description" rows="5" />
            
            <Label htmlFor="link">Link</Label>
            <Input id="link" name="link" placeholder="Add link to source" type="text" styled="inputAuth" />
            
            <Button
                type="submit"
                styled="formAuth on"
                title="Add news"
                onClick={() => {
                //   checkFields(values);
                }}
              />
            <Button
                type="button"
                styled="formAuth back"
                title="Cancel"
                onClick={() => {
                //   checkFields(values);
                }}
              />
        </Form>
    </Formik>
}

export default FormAddNews;