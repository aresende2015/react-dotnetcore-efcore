using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProAtividade.Domain.Entities;

namespace ProAtividade.Data.Mappings
{
    public class AtividadeMap : IEntityTypeConfiguration<Atividade>
    {
        public void Configure(EntityTypeBuilder<Atividade> builder) {
            builder.ToTable("Atividades");

            builder.Property(ativ => ativ.Titulo)
                .HasColumnType("varchar(100)");

            builder.Property(ativ => ativ.Descricao)
                .HasColumnType("varchar(255)");
        }
    }
}