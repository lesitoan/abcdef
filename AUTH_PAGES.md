# Authentication Pages Guide

## Overview

The authentication system provides a clean, reusable layout for login, signup, and password recovery pages. All auth pages share the same visual design and header styling.

## Project Structure

```
src/
├── app/
│   ├── (auth)/                          # Route group for auth pages
│   │   ├── layout.tsx                   # Auth layout wrapper
│   │   ├── login/
│   │   │   └── page.tsx                 # Login page
│   │   ├── signup/
│   │   │   └── page.tsx                 # Signup page
│   │   └── forgot-password/
│   │       └── page.tsx                 # Forgot password page
│
├── components/
│   └── layout/
│       ├── AuthLayout.tsx               # Centered layout for auth pages
│       └── AuthTopHeader.tsx            # Header for auth pages (no sidebar)
│
└── screens/
    └── authScreen/
        ├── index.tsx
        └── components/
            ├── LoginForm.tsx            # Login form component
            ├── SignupForm.tsx           # Signup form component
            └── ForgotPasswordForm.tsx   # Password recovery form component
```

## Available Routes

- **Login**: `/login`
- **Signup**: `/signup`
- **Forgot Password**: `/forgot-password`

## Components

### AuthLayout
Provides the centered layout structure for all auth pages. It includes:
- `AuthTopHeader` component
- Centered content container with full-height layout
- No sidebar (unlike the main app)

### AuthTopHeader
Simplified header that includes:
- V-BENCH branding/logo
- Navigation links (same as main header but styled for auth pages)
- Theme toggle (Light/Dark mode)

### Form Components

#### LoginForm
- Email input field
- Password input field
- Forgot password link
- Submit button with loading state
- Sign up link

#### SignupForm
- Full name input field
- Email input field
- Password input field
- Confirm password input field
- Form validation
- Submit button with loading state
- Login link

#### ForgotPasswordForm
- Email input field
- Submit button with loading state
- Success state with confirmation message
- Back to login link

## Styling

All auth forms use the existing design system:
- **Colors**: Uses CSS variables from `globals.css`
- **Components**: Reuses `Button` and `Input` from `src/components/ui/`
- **Layout**: Centered card design with proper spacing
- **Responsive**: Mobile-first design, adjusts for larger screens

## Adding New Auth Pages

To add a new auth page (e.g., email verification):

1. Create a new form component in `src/screens/authScreen/components/`:
   ```tsx
   // src/screens/authScreen/components/VerifyEmailForm.tsx
   'use client';

   import { Input } from '@/components/ui/input';
   import { Button } from '@/components/ui/button';
   
   export default function VerifyEmailForm() {
     // Form implementation here
     return (
       <div className="w-full max-w-sm">
         <div className="bg-card border border-border rounded-lg shadow-lg p-6 sm:p-8">
           {/* Form content */}
         </div>
       </div>
     );
   }
   ```

2. Create a new route page:
   ```tsx
   // src/app/(auth)/verify-email/page.tsx
   import VerifyEmailForm from '@/screens/authScreen/components/VerifyEmailForm';

   export const metadata = {
     title: 'Verify Email - V-BENCH',
     description: 'Verify your V-BENCH email address',
   };

   export default function VerifyEmailPage() {
     return <VerifyEmailForm />;
   }
   ```

## Form Implementation Notes

- All forms are client-side components (`'use client'`)
- Use `useState` for form state management
- Include loading states during form submission
- Add error handling and display
- Use form validation before submission
- Link to other auth pages as appropriate

## Customization

### Changing Form Styling
Edit the form components to adjust:
- Input field styling (use `Input` component props)
- Button styling and sizes
- Form spacing and layout
- Error message styling

### Updating Header Navigation
Modify `AuthTopHeader.tsx` to change:
- Navigation links
- Branding display
- Theme toggle location or styling
- Other header elements

### Layout Changes
Update `AuthLayout.tsx` to modify:
- Container width and padding
- Vertical/horizontal alignment
- Background styling
- Animation effects

## Security Considerations

**Current State**: Forms are mock implementations. When implementing real authentication:

1. **Backend Integration**: Connect to actual authentication API
2. **Password Handling**: Never log passwords or send them unencrypted
3. **Session Management**: Implement secure session storage
4. **CSRF Protection**: Add CSRF tokens for form submissions
5. **Rate Limiting**: Implement rate limiting on auth endpoints
6. **Email Verification**: Verify email addresses before account activation

## Theme Support

The auth pages automatically support light and dark themes via the theme toggle in `AuthTopHeader`. The styling automatically adjusts based on the active theme using CSS variables.
