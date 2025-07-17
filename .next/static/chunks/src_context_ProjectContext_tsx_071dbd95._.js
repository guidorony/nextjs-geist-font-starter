(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/ProjectContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProjectProvider": (()=>ProjectProvider),
    "useProjects": (()=>useProjects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ProjectContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ProjectProvider({ children }) {
    _s();
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load data from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectProvider.useEffect": ()=>{
            const savedProjects = localStorage.getItem('projects');
            const savedUser = localStorage.getItem('currentUser');
            if (savedProjects) {
                setProjects(JSON.parse(savedProjects));
            }
            if (savedUser) {
                setCurrentUser(JSON.parse(savedUser));
            }
        }
    }["ProjectProvider.useEffect"], []);
    // Save to localStorage whenever projects change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectProvider.useEffect": ()=>{
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    }["ProjectProvider.useEffect"], [
        projects
    ]);
    const login = (email, password)=>{
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u)=>u.email === email);
        if (user) {
            setCurrentUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
        return false;
    };
    const register = (email, password, name)=>{
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find((u)=>u.email === email)) {
            return false;
        }
        const newUser = {
            id: Date.now().toString(),
            email,
            name
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        setCurrentUser(newUser);
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        return true;
    };
    const logout = ()=>{
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };
    const addProject = (projectData)=>{
        const newProject = {
            ...projectData,
            id: Date.now().toString(),
            expenses: []
        };
        setProjects((prev)=>[
                ...prev,
                newProject
            ]);
    };
    const updateProject = (id, projectData)=>{
        setProjects((prev)=>prev.map((project)=>project.id === id ? {
                    ...project,
                    ...projectData
                } : project));
    };
    const deleteProject = (id)=>{
        setProjects((prev)=>prev.filter((project)=>project.id !== id));
    };
    const addExpense = (projectId, expenseData)=>{
        const newExpense = {
            ...expenseData,
            id: Date.now().toString()
        };
        setProjects((prev)=>prev.map((project)=>project.id === projectId ? {
                    ...project,
                    expenses: [
                        ...project.expenses,
                        newExpense
                    ]
                } : project));
    };
    const updateExpense = (projectId, expenseId, expenseData)=>{
        setProjects((prev)=>prev.map((project)=>project.id === projectId ? {
                    ...project,
                    expenses: project.expenses.map((expense)=>expense.id === expenseId ? {
                            ...expense,
                            ...expenseData
                        } : expense)
                } : project));
    };
    const deleteExpense = (projectId, expenseId)=>{
        setProjects((prev)=>prev.map((project)=>project.id === projectId ? {
                    ...project,
                    expenses: project.expenses.filter((expense)=>expense.id !== expenseId)
                } : project));
    };
    const getProjectSummaries = ()=>{
        return projects.map((project)=>({
                id: project.id,
                sot: project.sot,
                cliente: project.cliente,
                fecha: project.fecha,
                lugar: project.lugar,
                area: project.area,
                subArea: project.subArea,
                montoTotal: project.expenses.reduce((total, expense)=>{
                    let expenseTotal = 0;
                    if (expense.movilidad) expenseTotal += expense.movilidad.monto;
                    if (expense.viaticos?.hospedaje) expenseTotal += expense.viaticos.hospedaje.monto;
                    if (expense.viaticos?.alimento) {
                        expenseTotal += Object.values(expense.viaticos.alimento).reduce((sum, val)=>sum + (val || 0), 0);
                    }
                    if (expense.compras) expenseTotal += expense.compras.monto;
                    return total + expenseTotal;
                }, 0)
            }));
    };
    const getProjectById = (id)=>{
        return projects.find((project)=>project.id === id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectContext.Provider, {
        value: {
            projects,
            currentUser,
            login,
            register,
            logout,
            addProject,
            updateProject,
            deleteProject,
            addExpense,
            updateExpense,
            deleteExpense,
            getProjectSummaries,
            getProjectById
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ProjectContext.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(ProjectProvider, "/uDuRk2TKvMnC4eOmLGNBAqKcbo=");
_c = ProjectProvider;
function useProjects() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProjectContext);
    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectProvider');
    }
    return context;
}
_s1(useProjects, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ProjectProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_context_ProjectContext_tsx_071dbd95._.js.map