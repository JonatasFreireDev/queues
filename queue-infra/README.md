# Queue Infrastructure

Infraestrutura completa para o sistema de filas com NestJS, Go Worker e RabbitMQ.

## Serviços

- **queue-api**: Backend NestJS (porta 3000)
- **queue-worker**: Worker Go para processamento
- **queue-web**: Frontend React (porta 8080)
- **rabbitmq**: Message broker (porta 5672, admin 15672)

## Como executar

### Pré-requisitos
- Docker
- Docker Compose

### Comandos

1. **Subir toda a infraestrutura:**
   ```bash
   docker-compose up -d
   ```

2. **Ver logs em tempo real:**
   ```bash
   docker-compose logs -f
   ```

3. **Parar todos os serviços:**
   ```bash
   docker-compose down
   ```

4. **Reconstruir e subir:**
   ```bash
   docker-compose up --build -d
   ```

## Acessos

- **Frontend**: http://localhost:8080
- **API**: http://localhost:3000
- **RabbitMQ Admin**: http://localhost:15672 (guest/guest)

## Desenvolvimento

Para desenvolvimento local, você pode rodar os serviços individualmente:

```bash
# Apenas RabbitMQ
docker-compose up rabbitmq -d

# Apenas API
docker-compose up queue-api -d
``` 