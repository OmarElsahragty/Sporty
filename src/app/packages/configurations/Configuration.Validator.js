import * as yup from "yup";

export default yup.object().shape({
  emailServiceStatus: yup.boolean().nullable(),
  emailServiceHost: yup.string().nullable(),
  EmailAddress: yup.string().nullable(),
  EmailUsername: yup.string().nullable(),
  EmailPassword: yup.string().nullable(),
  newUserNotification: yup
    .object({
      id: yup.number(),
      englishName: yup.string(),
      value: yup.string(),
    })
    .nullable(),
  defaultRole: yup.number().min(1),
  defaultPrivileges: yup.object({
    requests: yup
      .object({
        close: yup.boolean().required(),
        start: yup.boolean().required(),
        access: yup.boolean().required(),
        cancel: yup.boolean().required(),
        create_edit: yup.boolean().required(),
      })
      .required(),
    workflow: yup
      .object({
        access: yup.boolean().required(),
        create_edit: yup.boolean().required(),
        view_progress: yup.boolean().required(),
      })
      .required(),
    statistics: yup
      .object({
        view_progress: yup.boolean().required(),
      })
      .required(),
    dynamic_forms: yup
      .object({
        access: yup.boolean().required(),
        create_edit: yup.boolean().required(),
        view_results: yup.boolean().required(),
        normalize_data: yup.boolean().required(),
      })
      .required(),
    notifications: yup
      .object({
        access: yup.boolean().required(),
        create_edit: yup.boolean().required(),
      })
      .required(),
    org_hierarchies: yup
      .object({
        access: yup.boolean().required(),
        edit_business_hierarchy: yup.boolean().required(),
        edit_administrative_hierarchy: yup.boolean().required(),
      })
      .required(),
    // administrative_requests: yup
    //   .object({
    //     access: yup.boolean().required(),
    //     create_edit: yup.boolean().required(),
    //     approve_requests: yup.boolean().required(),
    //     view_org_requests: yup.boolean().required(),
    //   })
    //   .required(),
  }),
});
