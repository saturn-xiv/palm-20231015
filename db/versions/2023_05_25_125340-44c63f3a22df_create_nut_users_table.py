"""create nut.users table

Revision ID: 44c63f3a22df
Revises: 
Create Date: 2023-05-25 12:53:40.132324

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '44c63f3a22df'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('real_name', sa.String(length=63), nullable=False),
        sa.Column('nickname', sa.String(length=63),
                  nullable=False, unique=True),
        sa.Column('email', sa.String(length=127),
                  nullable=False, unique=True),
        sa.Column('password', sa.LargeBinary),
        sa.Column('salt', sa.LargeBinary, nullable=False),
        sa.Column('avatar', sa.String(length=255),
                  nullable=False),
        sa.Column('lang', sa.String(length=8),
                  nullable=False),
        sa.Column('time_zone', sa.String(length=32),
                  nullable=False),
        sa.Column('sign_in_count', sa.Integer,
                  nullable=False, server_default='0'),
        sa.Column('current_sign_in_at', sa.DateTime),
        sa.Column('current_sign_in_ip', sa.String(length=45)),
        sa.Column('last_sign_in_at', sa.DateTime),
        sa.Column('last_sign_in_ip', sa.String(length=45)),
        sa.Column('confirmed_at', sa.DateTime),
        sa.Column('locked_at', sa.DateTime),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_users_real_name', 'users', ['real_name'])
    op.create_index('idx_users_lang', 'users', ['lang'])
    op.create_index('idx_users_time_zone', 'users', ['time_zone'])


def downgrade() -> None:
    op.drop_table('users')
