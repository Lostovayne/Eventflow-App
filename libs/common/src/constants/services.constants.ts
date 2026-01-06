export const SERVICES = {
  API_GATEWAY: 'api_gateway',
  AUTH_SERVICE: 'auth_service',
  USERS_SERVICE: 'users_service',
  EVENTS_SERVICE: 'events_service',
  TICKETS_SERVICE: 'tickets_service',
  PAYMENTS_SERVICE: 'payments_service',
  NOTIFICATIONS_SERVICE: 'notifications_service',
} as const;

export const SERVICES_PORTS = {
  API_GATEWAY: 3000,
  AUTH_SERVICE: 3001,
  USERS_SERVICE: 3002,
  EVENTS_SERVICE: 3003,
  TICKETS_SERVICE: 3004,
  PAYMENTS_SERVICE: 3005,
  NOTIFICATIONS_SERVICE: 3006,
} as const;
