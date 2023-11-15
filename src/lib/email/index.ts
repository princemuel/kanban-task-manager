import { EmailTemplate } from '@/components';
import { envVars } from '@/env.dto.mjs';
import type { SendVerificationRequestParams } from 'next-auth/providers/email';
import { Resend } from 'resend';

export const resend = new Resend(envVars.RESEND_API_KEY);

export async function sendVerificationRequest(
  params: SendVerificationRequestParams
) {
  const { identifier, url, provider, theme } = params;
  const { host } = new URL(url);

  console.log({ provider, theme });

  try {
    const data = await resend.emails.send({
      from: '<ktm_onboarding@resend.dev>',
      to: [identifier],
      subject: `Log in to ${host}`,
      text: `Sign in to ${host}\n${url}\n\n`,
      react: EmailTemplate({ url, host }),
    });
    return { status: 'success', data: data?.data?.id };
  } catch (error) {
    throw new Error('Failed to send the verification email...');
  }
}
