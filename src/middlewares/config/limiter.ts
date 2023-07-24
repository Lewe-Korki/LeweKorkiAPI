import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2137,
  message:
    'Too many accounts created from this IP, please try again after 15 minutes',
})

export default limiter
