dev:
    zellij --layout dev.kdl

check:
    just check-frontend
    just check-backend

check-frontend:
    cd ./frontend && npm run lint && npm run prettier && npm run typecheck

check-backend:
    cd ./backend && npm run lint && npm run prettier && npm run typecheck

alias d := dev
alias c := check
alias cf := check-frontend
alias cb := check-backend
