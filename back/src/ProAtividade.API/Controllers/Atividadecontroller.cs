using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Atividadecontroller : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Meu primeiro método Get";
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return $"Meu primeiro método Get com paramêtro {id}";
        }

        [HttpPost]
        public string Post()
        {
            return "Meu primeiro método Post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Meu primeiro método Put {id}";
        }

        [HttpDelete]
        public string Delete()
        {
            return "Meu primeiro método Delete";
        }
    }
}