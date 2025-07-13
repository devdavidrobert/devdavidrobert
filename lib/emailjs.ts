// Client-side email handling with EmailJS
import { toast } from "react-hot-toast";

interface EmailParams {
  from_name: string;
  reply_to: string;
  message: string;
}

export const sendEmail = async (params: EmailParams) => {
  const url = 'https://api.emailjs.com/api/v1.0/email/send';
  const serviceId = 'service_yl7zwan'; // Replace with your EmailJS service ID
  const templateId = 'template_i8oigib'; // Replace with your EmailJS template ID
  const publicKey = 'TKjOqaCMHopWb7jD_'; // Replace with your EmailJS public key
  
  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      ...params
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.status === 200) {
      return { success: true };
    } else {
      const error = await response.text();
      return { success: false, error };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email. Please try again later.' };
  }
};
