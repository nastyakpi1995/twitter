import styled from "styled-components";
import {posterValidateSchema} from "../../../utils/validates";
import {posterInitialValues} from "../../../utils/constants";
import {Button} from "antd";
import {Formik} from "formik";
import TextArea from "antd/es/input/TextArea";

const CreateNewPoster = ({user}) => {
    const onSubmit = (values) => {

    }
    return (
        <div>
            <Img>
                <img src={user.picture}  />
            </Img>

        <Formik
            validationSchema={posterValidateSchema}
            initialValues={posterInitialValues}
            onSubmit={onSubmit}>{({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
            isSubmitting
            }) => (

                    <form onSubmit={handleSubmit}>
                        <MyTextArea
                            name='description'
                            onChange={handleChange}
                            value={values.description}
                            placeholder="Controlled autosize"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                        {errors.description && touched.description && errors.description}

                        <Button onClick={handleSubmit} disabled={isSubmitting}>Submit</Button>
                    </form>
                )}
        </Formik>
        </div>
    )
}

export default CreateNewPoster;

const Img = styled.div`
  width: 45px;
  height: 45px;
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const MyTextArea = styled(TextArea)`
  margin: 10px 0;
`
