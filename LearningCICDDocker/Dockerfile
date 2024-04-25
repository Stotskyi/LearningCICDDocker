FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["LearningCICDDocker/LearningCICDDocker.csproj", "LearningCICDDocker/"]
RUN dotnet restore "LearningCICDDocker/LearningCICDDocker.csproj"
COPY . .
WORKDIR "/src/LearningCICDDocker"
RUN dotnet build "LearningCICDDocker.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "LearningCICDDocker.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LearningCICDDocker.dll"]
