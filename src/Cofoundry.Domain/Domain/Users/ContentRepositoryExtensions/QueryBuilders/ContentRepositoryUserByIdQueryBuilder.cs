﻿using Cofoundry.Domain.Extendable;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cofoundry.Domain
{
    public class ContentRepositoryUserByIdQueryBuilder
        : IContentRepositoryUserByIdQueryBuilder
        , IExtendableContentRepositoryPart
    {
        private int _userId;

        public ContentRepositoryUserByIdQueryBuilder(
            IExtendableContentRepository contentRepository,
            int userId
            )
        {
            ExtendableContentRepository = contentRepository;
        }

        public IExtendableContentRepository ExtendableContentRepository { get; }

        public Task<UserMicroSummary> AsMicroSummary()
        {
            var query = new GetUserMicroSummaryByIdQuery(_userId);
            return ExtendableContentRepository.ExecuteQueryAsync(query);
        }

        public Task<UserDetails> AsDetails()
        {
            var query = new GetUserDetailsByIdQuery(_userId);
            return ExtendableContentRepository.ExecuteQueryAsync(query);
        }
    }
}