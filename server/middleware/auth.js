// Import the 'jsonwebtoken' library to handle JWT (JSON Web Token) decoding and verification
import jwt from 'jsonwebtoken'

// Define an asynchronous middleware function for authentication
const userAuth  = async(req, res, next) => {

    // Extract the token from the request headers
    const { token } = req.headers

    // If token is missing in headers, return a response saying "Not authorized"
    if (!token) {
        return res.json({ success: false, message: "Not authorized, login again" })
    }

    try {
        // Try to decode and verify the token using the secret key
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        // If decoded token contains a user id (expected in payload during login/register)
        if (tokenDecode.id) {
            // Attach the user's ID to the request body (so controllers can access it)
            req.user = {id: tokenDecode.id}
        } else {
            // If token is decoded but doesn't contain a valid ID
            return res.json({ success: false, message: "Not authorized, login again" })
        }

        // If everything is fine, allow request to proceed to the next middleware or route
        next()

    } catch (error) {
        // If there's any error during verification (e.g., invalid token, expired token)
        return res.json({ success: false, message: "Not authorized, login again" })
    }
}

// Export this middleware so you can use it in protected routes
export default userAuth
