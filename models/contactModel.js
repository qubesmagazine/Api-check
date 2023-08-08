const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  status: String,
  request_id: String,
  parameters: {
    query: String,
    page: Number,
    num_pages: Number
  },
  data: [{
    company_name: String,
    company_logo: String,
    company_website: String, // You can use String or specify the correct data type
    company_company_type: String,
    company_publisher: String,
    company_id: String,
    company_employment_type: String,
    company_title: String,
    company_apply_link: String,
    company_description: String,
    company_is_remote: Boolean,
    company_city: String,
    company_state: String,
    company_country: String,
    company_google_link: String,
    company_required_experience: {
      no_experience_required: Boolean,
      required_experience_in_months: Number
    },
    company_required_skills: [String], // Array of Strings
    company_required_education: {
      postgraduate_degree: Boolean,
      professional_certification: Boolean
    },
    company_salary_currency: String,
    company_salary_period: String,
    company_highlights: {
      Qualifications: [String],
      Responsibilities: [String],
      Benefits: [String]
    },
    job_job_title: String,
    job_posting_language: String
  }]
});

module.exports = mongoose.model("Contact", contactSchema);
