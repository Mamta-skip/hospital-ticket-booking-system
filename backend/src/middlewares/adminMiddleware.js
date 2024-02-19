const isAdmin = (req, res, next) => {
    // Ensure that req.user is defined
    if (!req.user || !req.user.roles) {
        return res.status(401).json({ error: "User information not available. Access denied" });
    }

    // Check if user has the "ADMIN" role
    if (req.user.roles !== "ADMIN") {
        return res.status(401).json({ error: "Admin resource. Access denied" });
    }

    // If the user has the "ADMIN" role, continue to the next middleware
    next();
};

export default isAdmin;
