module.exports = {
    apps: [
        {
            name: "trydit",
            script: "npm",
            args: "start -- -p 3000",
            cwd: "/root/trydit",
            env: {
                NODE_ENV: "production"
            }
        },
        {
            name: "auditflow",
            script: "npm",
            args: "start -- -p 3001",
            cwd: "/root/auditflow",
            env: {
                NODE_ENV: "production"
            }
        },
        {
            name: "portfolio",
            script: "npm",
            args: "start",
            cwd: "/root/portfolio",
            env: {
                NODE_ENV: "production"
            }
        },
        {
            name: "honolulu",
            script: "npm",
            args: "start -- -p 3003",
            cwd: "/root/honolulu",
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};
