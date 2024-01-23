const isAdmin = async (req, res, next) => {

    if (req.user.roles !== "ADMIN") {
        return res.status(401).json({ error: "Admin resource. Access denied" });
    }
}

export default isAdmin;