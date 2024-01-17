import express from 'express'
import dotenv from 'dotenv'
import cookieSession from "cookie-session";
import cors from "cors";
import passport from "./middlewares/passport/index.js";
import userRoutes from './routes/userRoutes.js'
import carouselRoutes from './routes/carouselRoutes.js'
import featuredRoutes from './routes/featuredRoutes.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config()

const app = express()

app.options('*', cors()); // Set up a global OPTIONS handler
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cookieSession({
      name: 'session',
      keys: [process.env.SECRET],
    })
  );

//Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/v1/auth', userRoutes)
app.use('/api/v1/carousel', carouselRoutes)
app.use('/api/v1/featured', featuredRoutes)
app.use('/api/v1/posts', postRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
