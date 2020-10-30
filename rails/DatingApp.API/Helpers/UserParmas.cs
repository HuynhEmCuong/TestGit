namespace DatingApp.API.Helpers
{
    public class UserParmas
    {
        public const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;

        public int pageSize { get; set; } = 10;

        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value;}

        }
    }
}