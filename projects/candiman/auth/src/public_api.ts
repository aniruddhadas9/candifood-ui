/*
 * Public API Surface of auth
 */

// Components
export * from './lib/components/login/login.component';
export * from './lib/components/forget-password/forget-password.component';
export * from './lib/components/register/register.component';
export * from './lib/components/reset-password/reset-password.component';


// Services
export * from './lib/services/auth.service';
export * from './lib/services/google/google-api-config.service';
export * from './lib/services/google/google-api.service';
export * from './lib/services/google/google-auth.service';


// Module
export * from './lib/auth.module';

//m Routing
export * from './lib/auth-routing.module'
