Project:
```json
{
  "id": "project_1",
  "name": "Beblis",
  "sector_id": "1",
  "country_id": "country_1",
  "image_logo_id": "image_2",
  "image_portada_id": "image_3",
  "resume": "lorem...",
  "team_size": 5,
  "project_duration_months": 8,
  "rating": 4.5,
  "challenge": "lorem...",
  "solution": "lorem...",
  "result_description": "lorem...",
  "url": "https://beblis.com",
}
```

Sector
```json
{
  "id": "1",
  "name": "Turismo y alojamiento",
}
```

Country
```json
{
  "id": "country_1",
  "name": "Colombia",
  "code": "CO",
  "url_image": "https://example.com/colombia-flag.png"
}
```

Platform
```json
{
  "platform_id": "uuid-1234",
  "platform": "web",
}
```

image
```image
{
  "id": "image_1",
  "url": "https://example.com/project-image.png",
  "description": "Imagen del proyecto Beblis",
}
{
  "id": "image_2",
  "url": "https://example.com/beblis-logo-image.png",
  "description": "Imagen del logo de Beblis",
}
```

Technologies
```json
{
  "id": "tech_1",
  "name": "JavaScript",
}
```

Client Testimonial:
```json
{
  "id": "ct_1",
  "quote": "lorem...",
  "author": "Juan Perez",
  "position": "CEO",
  "company": "Beblis",
  "avatar_image_id": "image_18",
}
```


----------------------

Project Platform:
```json
{
  "platform_id": "uuid-1234",
  "project_id": "project_1",
}
```

Project Image:
```json
{
  "id": "pi_1",
  "image_id": "image_1",
  "project_id": "project_1",
}
```

Project Technology:
```json
{
  "id": "pt_1",
  "technology_id": "tech_1",
  "project_id": "project_1",
}
```

Project Image Result:
```json
{
  "id": "pir_1",
  "image_id": "image_3",
  "project_id": "project_1",
}
```

Project Image Secondary:
```json
{
  "id": "pis_1",
  "image_id": "image_2",
  "project_id": "project_1",
}
```

Project Client Testimonial:
```json
{
  "id": "pct_1",
  "client_testimonial_id": "ct_1",
  "project_id": "project_1",
}
```
