

using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IDatingRepository _repon;
        private readonly IMapper _mapper;
        public UserController(IDatingRepository repon, IMapper mapper)
        {
            _mapper = mapper;
            _repon = repon;
        }


        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repon.GetUsers();
            var userToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(userToReturn);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repon.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdate)
        {
            // if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            //     return Unauthorized();
            var userFormRepo = await _repon.GetUser(id);

            _mapper.Map(userForUpdate, userFormRepo);

            if (await _repon.SaveAll())
                return NoContent();

            throw new Exception($"Update user {id} faild  on save");
        }
    }
}