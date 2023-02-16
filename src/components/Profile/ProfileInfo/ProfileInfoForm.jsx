import {useDispatch, useSelector} from "react-redux";
import {setProfileInfoTC, setIsEditMode} from "../profileSlice";
import {Field, Form} from "react-final-form";

const ProfileInfoForm = ({profileInfo}) => {
    const userId = useSelector(state => state.auth.id)
    const errorMessage = useSelector(state => state.profile.errorMessage)
    const dispatch = useDispatch()

    const onSubmit = (values) => {
        const profileInfo = {
            id: userId,
            fullName: values.fullName,
            aboutMe: values.aboutMe,
            lookingForAJob: values.lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription,
            contacts: {
                facebook: values.facebook,
                vk: values.vk,
                github: values.github,
                instagram: values.instagram,
                twitter: null,
                youtube: null,
                website: null,
                mainLink: null,
            }
        }
        dispatch(setProfileInfoTC(profileInfo))
    }

    return (
        <div>
            <Form onSubmit={onSubmit}
                  render={({handleSubmit, form, submitting, pristine, values}) => (
                      <form onSubmit={handleSubmit}>
                          <Field name={"fullName"} initialValue={profileInfo.fullName || ''}>
                              {({input, meta}) => (
                                  <div>
                                      <label>Full name</label>
                                      <input {...input} type={"text"}/>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                          </Field>
                          <Field name={"aboutMe"} type={'textarea'} initialValue={profileInfo.aboutMe || ''}>
                              {({input, meta}) => (
                                  <div>
                                      <label>About me</label>
                                      <textarea {...input} type={"text"}></textarea>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                          </Field>
                          <Field name={"lookingForAJob"} type="checkbox" initialValue={profileInfo.lookingForAJob}>
                              {({input, meta}) => (
                                  <div>
                                      <label>Looking for a job</label>
                                      <input {...input} type="checkbox"/>
                                  </div>
                              )}
                          </Field>
                          <Field name={"lookingForAJobDescription"} type={'textarea'}
                                 initialValue={profileInfo.lookingForAJobDescription || ''}>
                              {({input, meta}) => (
                                  <div>
                                      <label>Description</label>
                                      <textarea {...input} type={"text"}></textarea>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                          </Field>

                          <Field name={"github"} type={'text'} initialValue={profileInfo.contacts.github || ''}>
                              {({input, meta}) => (
                                  <div>
                                      <label>github</label>
                                      <input {...input} type={"text"}/>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                          </Field>
                          <Field name={"vk"} type={'text'} initialValue={profileInfo.contacts.vk || ''}>
                              {({input, meta}) => (
                                  <div>
                                      <label>VK</label>
                                      <input {...input} type={"text"}/>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                          </Field>
                          <Field name={"facebook"} type={'text'} initialValue={profileInfo.contacts.facebook || ''}>
                              {({input, meta}) => (
                                  <div>
                                      <label>facebook</label>
                                      <input {...input} type={"text"}/>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                          </Field>
                          <Field name={"instagram"} type={'text'} initialValue={profileInfo.contacts.instagram || ''}>
                              {({input, meta}) => (
                                  <div>
                                      <label>instagram</label>
                                      <input {...input} type={"text"}/>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                          </Field>
                          {errorMessage && <div style={{color: 'crimson'}}>{errorMessage}</div>}
                          <button type={"submit"}> Save </button>
                      </form>)}
            />
            <button onClick={() => dispatch(setIsEditMode(false))}> Cansel </button>
        </div>
    )
}

export default ProfileInfoForm