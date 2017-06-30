FROM microsoft/aspnetcore:1.1
ARG source
ENV ASPNETCORE_ENVIRONMENT=Production
WORKDIR /app
EXPOSE 80
COPY ${source:-obj/Docker/publish} .
ENTRYPOINT ["dotnet", "Photoblog.dll"]
